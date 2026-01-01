# ABAC Rule Conditions
>[!NOTE]
>The `IAM_ABAC_RULES` feature flag must be enabled to create policies with ABAC rules. See the [Feature Gating](../../licensing/feature-gating.md) section for details.

When creating policy statements, you can define Attribute-Based Access Control (ABAC) rules in order to further refine when the statement applies. Define conditions using simple expressions with comparison and logical operators. Check the endpoint API documentation to see which resource attributes are available.

## Base Schema
The following attributes are always available for use in ABAC rules:
- `id`: string
- `env`:
    - `day_of_week`: number (0 = Sunday, 6 = Saturday)
    - `time_of_day`: string (hh:mm:ss, UTC, 24-hour format — lexicographic comparisons are valid)

## Operators And Constructs

- Comparison: `==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`
- Logical: `&&`, `||`, `!`
- String methods: `startsWith(...)`, `endsWith(...)`, `includes(...)`
- Regular expressions: use `/pattern/.test(value)`
- Use parentheses and nested expressions to combine conditions

## Examples

- Allow only on weekdays:
```
env.day_of_week >= 1 && env.day_of_week <= 5
```

- Allow during business hours (09:00:00–17:00:00), using lexicographic time comparison:
```
env.time_of_day >= "09:00:00" && env.time_of_day <= "17:00:00"
```

- Combine checks (during business hours on weekdays):
```
env.day_of_week >= 1 && env.day_of_week <= 5 && env.time_of_day >= "09:00:00" && env.time_of_day <= "17:00:00"
```
