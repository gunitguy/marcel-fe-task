import { Tube, Rack } from "../types";

const defaultRacksAmount = 3;

const canAddToRack = (tube: Tube, rack: Rack): boolean =>
  !rack.tubes.some(
    (t) =>
      t.age === tube.age ||
      t.companyName === tube.companyName ||
      t.cityDistrict === tube.cityDistrict ||
      t.visionDefect === tube.visionDefect
  );

const groupTubesToLimitedRacks = (
  tubes: Tube[],
  racksLimit: number = defaultRacksAmount
): { racks: Rack[]; additionalRacks: number } => {
  let additionalRacks = 0;
  const racks = tubes.reduce((acc, tube) => {
    const availableRack = acc.find((rack) => canAddToRack(tube, rack));

    if (availableRack) {
      availableRack.tubes.push(tube);
    } else {
      const newRack = { index: acc.length, tubes: [tube] };
      additionalRacks += 1;
      acc.push(newRack);
    }

    return acc;
  }, [] as Rack[]);

  return {
    racks,
    additionalRacks: additionalRacks - racksLimit
  };
};

export { canAddToRack, groupTubesToLimitedRacks };
