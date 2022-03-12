import { CoreValues, Module, ModuleConstructor } from "@internal-staff-portal/backend-shared";
import { Router } from "express";

//options for the Wrapper
interface ModuleOptions {}

//the wrapper of the constructor
export default function ModuleWrapper(options: ModuleOptions): ModuleConstructor {
  //the constructor
  return function (core: CoreValues): Module {
    //the router
    const TModuleRouter = Router()

    //the module code here

    //return the actual module
    return {
      name: "TModule",
      path: "/TModule", 
      router: TModuleRouter
    }
  };
}
