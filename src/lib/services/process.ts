export const DEFAULT_PROCESS_TITLE = "How a tent project runs";

export const DEFAULT_PROCESS_DESCRIPTION =
  "Survey, design, fabrication, installation, and handover stay with one team.";

export const DEFAULT_PROCESS_STEPS = [
  "Survey",
  "Design",
  "Fabricate",
  "Install",
  "Handover",
];

export function readProcessSteps(value: unknown) {
  if (!Array.isArray(value)) {
    return DEFAULT_PROCESS_STEPS.map((label) => ({ label }));
  }

  return value
    .map((step) => {
      if (typeof step === "string") return step.trim();
      if (step && typeof step === "object" && "label" in step) {
        return String((step as { label?: unknown }).label ?? "").trim();
      }
      return "";
    })
    .filter(Boolean)
    .map((label) => ({ label }));
}
