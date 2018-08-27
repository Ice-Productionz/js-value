import Duration from "./Date/Duration";
import Datetime from "./Date/Datetime";
import Uuid from "./Identifier/Uuid";
import Url from "./Uri/Url";
import Short from "./Text/Short";

module.exports = {
    "Value": {
        "Date": {
            "Datetime": Datetime,
            "Duration": Duration
        },
        "Identifier": {
            "Uuid": Uuid
        },
        "Text": {
            "Short": Short
        },
        "Uri": {
            "Url": Url
        }
    },
};
