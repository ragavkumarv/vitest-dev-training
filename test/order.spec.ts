import { describe } from 'vitest';
import { assert, expect, it } from 'vitest';
import {
  calculateOrderTotal,
  type OrderItem,
  type TaxRule,
} from '../src/order';

describe('Order in Cart', () => {
  it('applies discounts to items', () => {
    const items: OrderItem[] = [
      { name: 'Widget', price: 20, quantity: 1, discount: 10 }, // 10% discount
      { name: 'Gadget', price: 30, quantity: 1 },
    ];
    const taxRule: TaxRule = { rate: 10, applyToDiscountedPrice: true };

    const total = calculateOrderTotal(items, taxRule);
    // Widget: 20 - 10% = 18
    // Gadget: 30
    // Total: 18 + 30 = 48
    expect(total).toBe(52.8);
  });
});

// Negative numbers
// Decimals
// Strings -> Only provide numbers
