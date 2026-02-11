export type UserRole =
    | 'champuser'
    | 'standarduser'
    | 'clientuser'
    | 'poweruser'
    | 'adminuser';
// We have created a custom TypeScript union type called UserRole that restricts allowed values to a fixed set of string literals.
//  This provides compile-time type safety and prevents invalid role values