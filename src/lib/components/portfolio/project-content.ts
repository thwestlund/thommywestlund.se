export type ProjectContent = {
  projectCatchPhrase: string;

  problemStatementHeader: string;
  problemStatementDescription: string;

  solutionHeader: string;
  solutionDescription: string;

  challengeHeader: string;
  challengeDescription: string;

  sections: Section[];
};

export enum SectionType {
  Text = "text",
  TextImage = "textImage",
  Image = "image",
  Quotation = "quotation",
}

type SectionContent =
  | TextSection
  | TextImageSection
  | QuotationSection
  | ImageSection;

type Section = {
  columns: number;
  content: SectionContent[];
};

type TextSection = {
  type: SectionType.Text;
  title: string;
  description: string;
};

type TextImageSection = {
  type: SectionType.TextImage;
  textLeft: boolean;
  text: {
    title: string;
    description: string;
  };
  image: { src: string; alt: string };
};

type QuotationSection = {
  type: SectionType.Quotation;
  title: string;
  description: string;
};

type ImageSection = {
  type: SectionType.Image;
  image: { src: string; alt: string };
};

// Factory functions
export const createTextSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): TextSection => ({
  type: SectionType.Text,
  title,
  description,
});

export const createQuotationSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): QuotationSection => ({
  type: SectionType.Quotation,
  title,
  description,
});

export const createTextImageSection = ({
  text,
  textLeft,
  image,
}: {
  text: TextSection;
  textLeft: boolean;
  image: ImageSection;
}): TextImageSection => ({
  type: SectionType.TextImage,
  textLeft,
  text: { title: text.title, description: text.description },
  image: { src: image.image.src, alt: image.image.alt },
});

export const createImageSection = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}): ImageSection => ({
  type: SectionType.Image,
  image: { src, alt },
});

export const createProjectContent = ({
  projectCatchPhrase,
  problemStatementHeader,
  problemStatementDescription,
  solutionHeader,
  solutionDescription,
  challengeHeader,
  challengeDescription,
  sections,
}: {
  projectCatchPhrase: string;
  problemStatementHeader: string;
  problemStatementDescription: string;
  solutionHeader: string;
  solutionDescription: string;
  challengeHeader: string;
  challengeDescription: string;
  sections: Section[];
}): ProjectContent => ({
  projectCatchPhrase,
  problemStatementHeader,
  problemStatementDescription,
  solutionHeader,
  solutionDescription,
  challengeHeader,
  challengeDescription,
  sections,
});

export const createSection = ({
  columns,
  content,
}: {
  columns: number;
  content: SectionContent[];
}): Section => ({
  columns,
  content,
});
