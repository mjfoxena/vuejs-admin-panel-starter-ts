/** Drawer Menu Item Interface */
export interface IDrawerMenuItem {
  /** Item Name */
  title?: string | "-";
  /** Item Icon */
  icon?: string;
  /** Router Location */
  to?: string;
  /** is active */
  active?: boolean;
  /** Sub Items */
  children?: IDrawerMenuItem[];
  header?: string;
  subtitle?: string;
}

export interface ILayout {
  drawer: boolean;
  rail?: boolean;
  floating?: boolean;
  order?: number;
}

export interface IAppbarStore {
  title: string;
  show: boolean;
}
