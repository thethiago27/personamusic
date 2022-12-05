import brain from "brain.js";

const net = new brain.NeuralNetwork({
  hiddenLayers: [3],
  activation: "sigmoid",
  learningRate: 0.6,
});

const trainingData = [
  { input: [3, 2, 4], output: { animados: 1 } },
  { input: [3, 2, 1], output: { confortavel: 1 } },
  { input: [1, 5, 6], output: { tranquilos: 1 } },
];

net.train(trainingData);

export const getProfile = (input: number[]) => {
  const predict: any = net.run(input);

  const personality = Object.keys(predict).map((key) => {
    return {
      name: key,
      value: predict[key],
    };
  });

  return personality.reduce((a, b) => {
    return a.value > b.value ? a : b;
  });
};
