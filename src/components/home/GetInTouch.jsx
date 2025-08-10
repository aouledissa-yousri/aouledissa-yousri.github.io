import React from "react";
import { mainBody } from "../../editable-stuff/config";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
        <div className="p-5">
          {mainBody.icons.map((icon, index) => (
            <a
              key={`social-icon-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.url}
              aria-label={`My ${icon.image.split("-")[1]}`}
            >
              <i className={`fab ${icon.image}  fa-3x socialicons`} style={{ color: icon.color }}/>
            </a>
          ))}
        </div>



      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
