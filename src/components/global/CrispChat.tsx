"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    // Replace 'YOUR_WEBSITE_ID' with the ID from your Crisp dashboard
    Crisp.configure("e1e99f89-7d79-4b0d-950d-d7ed8ebb561c");
  }, []);

  return null; // This component doesn't render anything visible
};

export default CrispChat;