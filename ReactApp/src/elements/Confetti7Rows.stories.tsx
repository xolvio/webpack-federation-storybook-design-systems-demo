import React from "react";

import "../index.css";
import {Confetti7Rows} from "./Confetti7Rows";

export default { title: "Elements/Confetti" };

export const Active = () => <Confetti7Rows active={true} size={10}/>;
export const NotActive = () => <Confetti7Rows active={false} size={1}/>;
