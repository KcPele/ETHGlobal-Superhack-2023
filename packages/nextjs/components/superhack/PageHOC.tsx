import React from "react";
import Sidebar from "./Sidebar";

// Define the type for the props that the wrapped component will receive
type ComponentProps = {
  // Define your props here
};

const PageHOC = (Component: React.ComponentType<ComponentProps>) => {
  const WrappedComponent = (props: ComponentProps) => (
    <div className="pagehoc__container">
      <div className="">
        <Sidebar />
      </div>

      <div className="w-full">
        <Component {...props} />
      </div>
    </div>
  );

  // Set the display name for the wrapped component
  WrappedComponent.displayName = `PageHOC(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
};

export default PageHOC;
