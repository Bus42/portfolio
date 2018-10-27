import React from "react";
import { Image } from "react-bootstrap";

const PanelBodyContent = ({ app }) => {
  return window.screen.height > 1000 &&
    window.screen.width > 1000 &&
    app.iframe ? (
      <div
        className="embed-responsive embed-responsive-16by9"
      >
      <iframe
        className="embed-responsive-item"
        allowFullScreen
        title={app.title}
        src={app.href}
      />
    </div>
  ) : (
      <a
        href={app.href}
        target={app.title}
      >
        <Image
          rounded
          style={{ maxWidth: "90%" }}
          src={app.image}
        />
    </a>
  );
};

export default PanelBodyContent;
