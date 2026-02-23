import { execSync } from "node:child_process";
import fs from "node:fs";

if(fs.existsSync("client-plugins")) {
    execSync("git -C client-plugins pull");
    console.log("Updated client-plugins");
} else {
    execSync("git clone https://github.com/Gimloader/client-plugins");
    console.log("Cloned client-plugins");
}