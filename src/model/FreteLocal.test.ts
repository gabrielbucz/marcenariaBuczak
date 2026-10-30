import FreteLocal from './FreteLocal';

describe('FreteLocal', () => {
  it('deve instanciar o frete local com a distância definida', () => {
    const freteLocal = new FreteLocal();
    freteLocal.setDistancia(10);

    expect(freteLocal).toBeDefined();
    expect(freteLocal.getDistancia()).toBe(10);
  });

  it('deve calcular o valor do frete local corretamente para 10 km', () => {
    const freteLocal = new FreteLocal();
    freteLocal.setDistancia(10);

    // Cálculo: (10 * 1.12) * 10 = 112
    expect(freteLocal.calcularFrete()).toBeCloseTo(112);
  });

  it('deve calcular o valor do frete local para distância igual a 0 km', () => {
    const freteLocal = new FreteLocal();
    freteLocal.setDistancia(0);

    expect(freteLocal.calcularFrete()).toBe(0);
  });

  it('deve calcular corretamente com distância decimal', () => {
    const freteLocal = new FreteLocal();
    freteLocal.setDistancia(25.5);

    // Cálculo: (25.5 * 1.12) * 10 = 285.6
    expect(freteLocal.calcularFrete()).toBeCloseTo(285.6);
  });
});