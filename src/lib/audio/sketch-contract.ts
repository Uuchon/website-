/**
 * Boundary between the site and the existing p5.js sound-visualization sketch.
 *
 * The sketch keeps its own FFT analysis and color conversion. Nothing in this
 * file re-implements, reorders, or re-tunes that algorithm: the types below only
 * describe what the surrounding page is allowed to read, so the original
 * `setup` / `draw` code can be dropped in without modification.
 *
 * Integration outline (see the Sound Visualization page):
 *   analysis layer  — the existing sketch, untouched
 *   transform layer — an adapter that maps its output to AcousticFrame
 *   presentation    — the stage component that mounts the sketch
 */

/** One analysis tick, expressed with the units of the existing sketch. */
export type AcousticFrame = {
  /** RMS amplitude in the range the sketch already uses. */
  amplitude: number;
  /** FFT magnitude buffer, passed through as-is. */
  spectrum: ArrayLike<number>;
  /** Spectral centroid, already computed by the sketch. */
  spectralCentroid: number;
  /** Spectral flatness, already computed by the sketch. */
  spectralFlatness: number;
};

/** Read-only handle returned to the page after mounting the sketch. */
export type SoundSketchHandle = {
  start: () => void;
  stop: () => void;
  /** Optional latest frame for captions or logging. Never mutated here. */
  readFrame?: () => AcousticFrame | null;
};

/** Mounts the existing sketch into a given element without altering it. */
export type SoundSketchMount = (host: HTMLElement) => SoundSketchHandle;
