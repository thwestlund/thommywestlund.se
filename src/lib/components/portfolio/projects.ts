import { type ProjectHeader } from "./project-header";
import { type ProjectContent } from "./project-content";

export type Projects = Project[];

export type Project = {
  ProjectHeader: ProjectHeader;
  ProjectContent: ProjectContent;
};
