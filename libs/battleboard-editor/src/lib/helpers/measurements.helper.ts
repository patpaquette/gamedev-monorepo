import { Vector3 } from '@babylonjs/core';
import { Errors } from '@libs/utilities/src/lib/errors.helper';

const aMetre: number = 1; // 1 Metre
const aYard: number = aMetre * 0.9144; // 1 Yard

export type UnitOfMeasurement = 'metre' | 'yard';

export function metres(quantity: number): number {
  if (isNaN(+quantity)) throw new Errors.NaNParameter('metres', 'quantity');
  return aMetre * quantity;
}

export function yards(quantity: number): number {
  if (isNaN(+quantity)) throw new Errors.NaNParameter('yards', 'quantity');
  return aYard * quantity;
}

export function getConversionMethod(unit: UnitOfMeasurement): (quantity: number) => number {
  switch (unit) {
    case 'metre': return metres;
    case 'yard': return yards;
    default: return metres;
  }
}

export function getVector3(x: number, y: number, z: number, unit: UnitOfMeasurement = 'metre'): Vector3 {
  const convert = getConversionMethod(unit);
  return new Vector3(convert(x), convert(y), convert(z));
}
