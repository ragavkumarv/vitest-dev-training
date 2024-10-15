// src/utils/order.ts

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // Discount percentage (e.g., 10 for 10%)
}

export interface TaxRule {
  rate: number; // Tax rate percentage (e.g., 5 for 5%)
  applyToDiscountedPrice?: boolean; // Whether to apply tax after discount
}

/**
 * Validates the properties of an OrderItem.
 * @param item - The order item to validate.
 */
export function validateOrderItem(item: OrderItem): void {
  const { name, quantity, discount } = item;

  if (quantity < 0) {
    throw new Error(`Quantity for item "${name}" cannot be negative`);
  }

  if (discount !== undefined && (discount < 0 || discount > 100)) {
    throw new Error(`Invalid discount for item "${name}"`);
  }
}

/**
 * Calculates the total price for a single item after applying discount.
 * @param item - The order item.
 * @returns The total price for the item.
 */
export function calculateItemTotal(item: OrderItem): number {
  validateOrderItem(item);

  const { price, quantity, discount = 0 } = item;
  const totalPrice = price * quantity;
  const discountAmount = (totalPrice * discount) / 100;

  return totalPrice - discountAmount;
}

/**
 * Calculates the subtotal for all items.
 * @param items - Array of order items.
 * @returns The subtotal amount.
 */
export function calculateSubtotal(items: OrderItem[]): number {
  return items.reduce(
    (subtotal, item) => subtotal + calculateItemTotal(item),
    0
  );
}

/**
 * Calculates the tax amount based on the tax rule.
 * @param subtotal - The subtotal amount.
 * @param items - Array of order items.
 * @param taxRule - The tax rule to apply.
 * @returns The tax amount.
 */
export function calculateTax(
  subtotal: number,
  items: OrderItem[],
  taxRule: TaxRule
): number {
  const { rate, applyToDiscountedPrice = true } = taxRule;

  if (rate <= 0) return 0;

  const baseAmount = applyToDiscountedPrice
    ? subtotal
    : items.reduce((sum, { price, quantity }) => sum + price * quantity, 0);

  return (baseAmount * rate) / 100;
}

/**
 * Calculates the total order amount, including taxes.
 * @param items - Array of order items.
 * @param taxRule - The tax rule to apply.
 * @returns The total order amount.
 */
export function calculateOrderTotal(
  items: OrderItem[],
  taxRule: TaxRule
): number {
  if (!items.length) return 0;

  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal, items, taxRule);
  const total = subtotal + tax;

  return parseFloat(total.toFixed(2));
}
