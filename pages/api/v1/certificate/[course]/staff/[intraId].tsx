import ReactDomServer from "react-dom/server";
import type { NextApiRequest, NextApiResponse } from "next";
import Certificate from "../../../../../../src/component/Certificate";
import data from "../../../../../../hall_of_frame.json";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { course, intraId } = request.query as {
    course: string;
    intraId: string;
  };

  const courseData = data
    .filter((value) => value.name === course)
    .filter(Boolean)[0];

  if (!courseData) {
    return response.status(404).json({
      status: 404,
      msg: "Course not found",
    });
  }

  const userData = courseData.staff.filter(
    (value) => value.intraId === intraId
  )[0];

  if (!userData) {
    return response.status(404).json({
      status: 404,
      msg: "User not found",
    });
  }

  response.setHeader(
    "Cache-Control",
    `s-maxage=${60 * 1 * 1}, stale-while-revalidate`
  );
  response.setHeader("Content-Type", "image/svg+xml");
  response.status(200).send(
    ReactDomServer.renderToString(
      <Certificate
        title={`${courseData.title} Staff`}
        infos={[
          {
            name: "Name",
            value: userData.name,
          },
          {
            name: "42IntraId",
            value: userData.intraId,
          },
          {
            name: "GtihubId",
            value: userData.githubId,
          },
          {
            name: "Role",
            value: userData.role.join(", "),
          },
          !!userData.subjects && {
            name: "Participate in subject creation",
            value: userData.subjects.join(", "),
          },
          {
            name: "Certificated",
            value: new Date(courseData.completionDate).toLocaleDateString(),
          },
        ]}
      />
    )
  );
};
