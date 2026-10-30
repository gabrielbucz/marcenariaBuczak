import MovelComplexo from './MovelComplexo';
// teste 1
describe('MovelComplexo', () => {
  it('deve instanciar o objeto corretamente', () => {
    const movel = new MovelComplexo();
    expect(movel).toBeDefined();
  });

  // teste 2
  it('deve calcular o preço do móvel complexo somando materiais e mão de obra', () => {
    const movel = new MovelComplexo();

    movel.setChapas(10);        // 10 * 280 = 2800
    movel.setDobradicas(10);   // 10 * 8  = 80
    movel.setFundos(10);        // 10 * 90  = 900
    movel.setPuxadores(10);     // 10 * 12  = 120
    movel.setHoraTrabalho(10); // 10 * 50 = 500

    // Cálculo esperado: (2800 + 80 + 900 + 120) + 500 = 4400
    expect(movel.calcularPreco()).toBe(4400);
  });

  // teste 3
  it('deve retornar valor zero se todas as quantidades forem zero', () => {
    const movel = new MovelComplexo();

    movel.setChapas(0);
    movel.setDobradicas(0);
    movel.setFundos(0);
    movel.setPuxadores(0);
    movel.setHoraTrabalho(0);

    expect(movel.calcularPreco()).toBe(0);
  });
});