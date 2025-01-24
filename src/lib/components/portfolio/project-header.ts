export type ProjectHeader = {
  projectName: string;
  projectDecription: string;
  projectImage: ProjectImage;
  challenge: string;
  roles: string[];
  deliverables: string[];
  technologies: string[];
  timeline: string;
  prototypeLink: string;
};

type ProjectImage = { src: string; alt: string };

export const createProjectHeader = ({
  projectName,
  projectDecription,
  projectImage,
  challenge,
  roles,
  deliverables,
  technologies,
  timeline,
  prototypeLink,
}: {
  projectName: string;
  projectDecription: string;
  projectImage: ProjectImage;
  challenge: string;
  roles: string[];
  deliverables: string[];
  technologies: string[];
  timeline: string;
  prototypeLink: string;
}): ProjectHeader => ({
  projectName,
  projectDecription,
  projectImage,
  challenge,
  roles,
  deliverables,
  technologies,
  timeline,
  prototypeLink,
});
