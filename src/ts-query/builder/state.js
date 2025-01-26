import { globalState } from "../state";
import data from "./data.json";

export const useElements = globalState("elements", data );
