export type AnalysisModel = {
  key: string;
  val: number;
}

export const getAnalysis = (models: AnalysisModel[], key: string) => {
  return models.find(model => model.key === key)?.val
}