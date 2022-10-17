export interface CustomPopoverProps {
  name: string;
  open: boolean;
  onMouseLeave: () => void;
  anchorEl: HTMLElement | null;
}
