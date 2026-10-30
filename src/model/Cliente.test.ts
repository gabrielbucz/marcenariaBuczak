import Cliente from './Cliente';

describe('Cliente', () => {
  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente();
  });

  it('deve instanciar o objeto corretamente', () => {
    expect(cliente).toBeDefined();
  });

  it('deve definir e obter o nome corretamente', () => {
    const nome = 'Gabriel Buczak';
    cliente.setNome(nome);
    expect(cliente.getNome()).toBe(nome);
  });

  it('deve definir e obter o telefone corretamente', () => {
    const telefone = '42999999999';
    cliente.setTelefone(telefone);
    expect(cliente.getTelefone()).toBe(telefone);
  });

  it('deve definir e obter o endereço corretamente', () => {
    const endereco = 'Rua XV de Novembro, 123';
    cliente.setEndereco(endereco);
    expect(cliente.getEndereco()).toBe(endereco);
  });

  it('deve manter o estado de todas as propriedades atribuídas', () => {
    cliente.setNome('Gabriel Buczak');
    cliente.setTelefone('42999999999');
    cliente.setEndereco('Rua XV de Novembro, 123');

    expect(cliente.getNome()).toBe('Gabriel Buczak');
    expect(cliente.getTelefone()).toBe('42999999999');
    expect(cliente.getEndereco()).toBe('Rua XV de Novembro, 123');
  });
});