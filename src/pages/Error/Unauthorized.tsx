import React from "react";

const unauthorized: React.FC = () => {
  return (
    <div>
        <h1>403</h1>
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
    </div>
  );
}
export default unauthorized;