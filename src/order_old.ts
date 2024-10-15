export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // Discount in percentage (e.g., 10 for 10%)
}

export interface TaxRule {
  rate: number; // Tax rate in percentage (e.g., 5 for 5%)
  applyToDiscountedPrice?: boolean; // Whether to apply tax after discount
}

export function calculateOrderTotal(
  items: OrderItem[],
  taxRule: TaxRule
): number {
  if (!items.length) return 0;

  let subtotal = 0;

  for (const item of items) {
    if (item.quantity < 0) {
      throw new Error(`Quantity for item ${item.name} cannot be negative`);
    }

    let itemTotal = item.price * item.quantity;

    if (item.discount) {
      if (item.discount < 0 || item.discount > 100) {
        throw new Error(`Invalid discount for item ${item.name}`);
      }
      itemTotal -= (itemTotal * item.discount) / 100;
    }

    subtotal += itemTotal;
  }

  let total = subtotal;

  if (taxRule.rate > 0) {
    if (taxRule.applyToDiscountedPrice) {
      total += (subtotal * taxRule.rate) / 100;
    } else {
      const originalTotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      total += (originalTotal * taxRule.rate) / 100;
    }
  }

  return parseFloat(total.toFixed(2));
}
