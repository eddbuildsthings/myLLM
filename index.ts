import { type LLMConfig } from "./types";

const llmConfig =  {
    vocabSize:  4096,
    maxSeqLen:  128,
    dModel:     384,
    nLayers:    6
} as LLMConfig

console.log(llmConfig);
