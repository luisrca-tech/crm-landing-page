interface AccordionsItemsProps {
  value: string;
  title: string;
  contents: string[];
}

export const AccordionsItems: AccordionsItemsProps[] = [
  {
    value: 'item-1',
    title: 'Produto',
    contents: [
      'Mudanças',
      'Testemunhos',
      'Segurança',
      'Chrome extensão',
      'IOS App',
      'Android App',
      'Zapier',
      'Integromat'
    ]
  },
  {
    value: 'item-2',
    title: 'Empresa',
    contents: ['Sobre', 'Carreiras', 'Blog', 'Programa de Startup']
  },
  {
    value: 'item-3',
    title: 'Attio para',
    contents: ['Startups', 'Dear flow']
  },
  {
    value: 'item-4',
    title: 'Suporte',
    contents: ['Central de ajuda', 'Converse com o suporte', 'API docs', 'Status do sistema']
  },
];
