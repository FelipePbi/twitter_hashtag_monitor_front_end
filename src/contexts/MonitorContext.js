import React from "react";

export default React.createContext({
  hashtag: "",
  monitoring: false,
  received: [],
  approved: [],
  rejected: [],
  setHashtag: () => {},
  setMonitoring: () => {},
  setReceived: () => {},
  setApproved: () => {},
  setRejected: () => {},
});
