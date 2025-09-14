export type ScreenNames = keyof ReactNavigation.RootParamList;

export type MenuButtonProps = {
  title: string;
  color: string;
  linkTo?: ScreenNames;
};
