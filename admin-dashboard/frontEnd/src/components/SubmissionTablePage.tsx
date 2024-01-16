// SubmissionTablePage.tsx

import React from "react";
import SubmissionTable from "./SubmissionTable"; // Adjust the import path as needed
import ErrorBoundary from "./ErrorBoundary"; // Adjust the import path as needed

const SubmissionTablePage: React.FC = () => {
  return (
    <div>
      {/* Other components or content */}
      <ErrorBoundary>
        <SubmissionTable />
      </ErrorBoundary>
      {/* Other components or content */}
    </div>
  );
};

export default SubmissionTablePage;
