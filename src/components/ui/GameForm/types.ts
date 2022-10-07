export interface GameFormProps {
  user: string;
  setOpenDrawer: (payload: boolean) => void;
}

export type FormValues = {
  name: string;
  cover: string;
  userCode: string;
  platform: string;
};
