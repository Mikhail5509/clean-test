import { calculateHealthStatus } from "../health";

  test ('should return "healthy" if health more than 50', () =>{
    const result = calculateHealthStatus({ name:'Mar', health: 90 });
    expect(result).toBe('healthy');
  })

  test('should return "wounded" if health is between 15 and 50', () => {
    const result = calculateHealthStatus({ name: 'Воин', health: 40 });
    expect(result).toBe('wounded');
  });

  test('should return "wounded" if health is exactly 50', () => {
    const result = calculateHealthStatus({ name: 'Лучник', health: 50 });
    expect(result).toBe('wounded');
  });

  test('should return "critical" if health less than 15', () => {
    const result = calculateHealthStatus({ name: 'Волшебник', health: 10 });
    expect(result).toBe('critical');
  });

  test('should return "critical" if health is exactly 15', () => {
    const result = calculateHealthStatus({ name: 'Разбойник', health: 15 });
    expect(result).toBe('wounded');
});
