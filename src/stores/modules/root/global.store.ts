import { IAppbarStore, ILayout } from "@/interfaces/global.interface";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

/** Global Store */
export default defineStore("global", () => {
  // State

  /** Left Drawer */
  const layout: Ref<ILayout> = ref<ILayout>({
    drawer: true,
    rail: false,
    floating: false,
    order: 0,
  });

  /// Appbar State
  const appbarState: Ref<IAppbarStore> = ref<IAppbarStore>({
    title: "",
    show: true,
  });

  /** Loading overlay */
  const loading: Ref<boolean> = ref(false);
  /** ProgressBar Percentage */
  const progress: Ref<number | null> = ref(null);
  /** SnackBar Text */
  const message: Ref<string> = ref("");

  // Actions

  /**
   * Show loading Overlay
   *
   * @param display - visibility
   */
  function setLoading(display: boolean): void {
    loading.value = display;
    if (!display) {
      // Reset Progress value
      progress.value = null;
    }
  }

  /**
   * Update progress value
   *
   * @param v - progress value
   */
  function setProgress(v: number | null = null): void {
    // update progress value
    progress.value = v;
    // display loading overlay
    loading.value = true;
  }

  /**
   * Show snackbar message
   *
   * @param msg - snackbar message
   */
  function setMessage(msg = ""): void {
    // put snackbar text
    message.value = msg;
  }

  /// Drawer
  function toggleDrawer(): void {
    layout.value.drawer = !layout.value.drawer;
  }
  function toggleRail(): void {
    layout.value.rail = !layout.value.rail;
  }

  function setDrawerState(state: ILayout): void {
    layout.value = state;
  }

  function setAppbarState(state: IAppbarStore): void {
    appbarState.value = state;
  }

  return {
    loading,
    progress,
    message,
    layout,
    appbarState,
    toggleRail,
    setLoading,
    setProgress,
    setMessage,
    toggleDrawer,
    setDrawerState,
    setAppbarState,
  };
});
