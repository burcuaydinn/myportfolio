import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import useLanguageAndTheme from "../hooks/useLanguageAndTheme";

function Profile() {
  const { darkMode, text } = useLanguageAndTheme();

  return (
    <div
      className={`${
        darkMode ? "bg-custom-blue-dark" : "bg-custom-blue"
      } flex justify-center py-10`}
    >
      <div className="w-full max-w-screen-lg">
        <h2 className=" text-left ml-[2rem] md:ml-[60px] text-5xl font-bold text-custom-yellow">
          {text.profile}
        </h2>
        <CardGroup className="h-auto mb-12 flex flex-col lg:flex-row">
          <Card className="text-white  md:ml-6 p-6 border-none bg-transparent w-full lg:w-1/3">
            <CardBody>
              <CardTitle tag="h5" className="text-2xl font-bold mb-3">
                {text.info}
              </CardTitle>
              <div className="mb-4 flex items-center">
                <CardSubtitle className="w-1/3 text-custom-yellow" tag="h6">
                  {text.birthday}
                </CardSubtitle>
                <CardText className="w-2/3">30.10.1994</CardText>
              </div>
              <div className="mb-4 flex items-center">
                <CardSubtitle className="w-1/3 text-custom-yellow" tag="h6">
                  {text.center}
                </CardSubtitle>
                <CardText className="w-2/3">İstanbul</CardText>
              </div>
              <div className="mb-4 flex items-center">
                <CardSubtitle className="w-1/3 text-custom-yellow" tag="h6">
                  {text.education}
                </CardSubtitle>
                <CardText className="w-2/3">
                  Dokuz Eylül Üniv. Matematik Lisans, 2019
                </CardText>
              </div>
              <div className="mb-4 flex items-center">
                <CardSubtitle className="w-1/3 text-custom-yellow" tag="h6">
                  {text.preffered}
                </CardSubtitle>
                <CardText className="w-2/3">Frontend, UI</CardText>
              </div>
            </CardBody>
          </Card>
          <Card className="flex items-center justify-center p-6 bg-transparent border-none w-full lg:w-1/3">
            <CardImg
              alt="Profile Image"
              src="https://pbs.twimg.com/profile_images/1677790589096525825/ibmbT9Wf_400x400.jpg"
              className="h-72 w-80 lg:h-72  lg:w-72 object-cover -mt-6 rounded-lg"
            />
          </Card>
          <Card className="text-white  border-none bg-transparent w-full lg:w-1/3 lg:ml-[-1rem]">
            <CardBody>
              <CardTitle tag="h5" className="text-2xl font-bold mb-4">
                {text.about}
              </CardTitle>
              <CardText className="mb-4">{text.about1}</CardText>
              <CardText>{text.about2}</CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Profile;
