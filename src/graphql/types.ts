interface IAddTagArgs {
  label: string;
}

interface IAddItemArgs {
  name: string;
  description: string;
  tags: string[];
  image: string;
  category?: string;
  supply?: string;
}
