export const questions = [
  {
    id: 'sex',
    text: 'Qual o seu sexo?',
    options: ['Masculino', 'Feminino'],
  },
  {
    id: 'age',
    text: 'Qual a sua idade?',
    options: ['Menos de 18', '18-24 anos', '25-34 anos', '35-44 anos', '45+ anos'],
  },
  {
    id: 'height',
    text: 'Qual a sua altura?',
    options: ['Menos de 1.50m', '1.50m - 1.60m', '1.61m - 1.70m', '1.71m - 1.80m', 'Mais de 1.80m'],
  },
  {
    id: 'weight',
    text: 'Qual o seu peso atual?',
    options: ['Menos de 50kg', '50kg - 60kg', '61kg - 70kg', '71kg - 80kg', 'Mais de 80kg'],
  },
  // Intermediate step 1
  {
    id: 'goal',
    text: 'Qual é o seu principal objetivo?',
    options: ['Perder peso', 'Ganhar massa muscular', 'Melhorar a saúde', 'Aumentar performance', 'Recomposição corporal'],
  },
  {
    id: 'availability',
    text: 'Quantos dias por semana você pode treinar?',
    options: ['1-2 dias', '3 dias', '4 dias', '5 dias', '6-7 dias'],
  },
  {
    id: 'experience',
    text: 'Qual sua experiência com treinos?',
    options: ['Iniciante (nunca treinei)', 'Iniciante (já treinei antes)', 'Intermediário', 'Avançado', 'Atleta'],
  },
  {
    id: 'workoutPreference',
    text: 'Que tipo de treino você prefere?',
    options: ['Musculação', 'Funcional / HIIT', 'Yoga / Pilates', 'Corrida / Ciclismo', 'Uma mistura de tudo'],
  },
  // Intermediate step 2
  {
    id: 'workoutLocation',
    text: 'Onde você prefere treinar?',
    options: ['Academia completa', 'Em casa com equipamentos', 'Em casa sem equipamentos', 'Ao ar livre', 'Estúdio / Box'],
  },
  {
    id: 'focusArea',
    text: 'Qual parte do corpo é seu foco?',
    options: ['Corpo inteiro', 'Abdômen e Core', 'Pernas e glúteos', 'Braços e peitoral', 'Costas e ombros'],
  },
  {
    id: 'workoutDuration',
    text: 'Quanto tempo por sessão de treino?',
    options: ['Até 30 minutos', '30-45 minutos', '45-60 minutos', '60-90 minutos', 'Mais de 90 minutos'],
  },
  {
    id: 'workoutTime',
    text: 'Qual o melhor horário para você treinar?',
    options: ['Manhã (5h-9h)', 'Meio-dia (10h-14h)', 'Tarde (15h-18h)', 'Noite (19h-22h)', 'Qualquer horário'],
  },
  // Intermediate step 3
  {
    id: 'diet',
    text: 'Como é sua alimentação atual?',
    options: ['Sem restrições', 'Tento ser saudável', 'Sigo uma dieta específica', 'Vegetariana / Vegana', 'Preciso de ajuda com isso'],
  },
  {
    id: 'motivation',
    text: 'O que mais te motiva?',
    options: ['Ver resultados no espelho', 'Melhorar a saúde e bem-estar', 'Superar meus limites', 'Ter mais energia no dia a dia', 'Um evento especial'],
  },
  {
    id: 'activityLevel',
    text: 'Como é seu nível de atividade diária (fora o exercício)?',
    options: ['Sedentário (trabalho sentado)', 'Levemente ativo (caminhadas leves)', 'Ativo (trabalho em pé)', 'Muito ativo (trabalho físico)', 'Extremamente ativo'],
  },
  {
    id: 'sleep',
    text: 'Quantas horas você dorme por noite, em média?',
    options: ['Menos de 5 horas', '5-6 horas', '6-7 horas', '7-8 horas', 'Mais de 8 horas'],
  },
  // Intermediate step 4
  {
    id: 'stress',
    text: 'Como você avalia seu nível de estresse?',
    options: ['Muito baixo', 'Baixo', 'Moderado', 'Alto', 'Muito alto'],
  },
  {
    id: 'equipment',
    text: 'Quais equipamentos você tem acesso?',
    options: ['Nenhum', 'Elásticos e pesos leves', 'Halteres e barras', 'Academia completa', 'Vários equipamentos em casa'],
  },
  {
    id: 'healthIssues',
    text: 'Possui alguma lesão ou condição de saúde?',
    options: ['Nenhuma', 'Dores nas costas', 'Dores nos joelhos', 'Outras dores articulares', 'Condição crônica (ex: diabetes)'],
  },
  {
    id: 'desiredTimeline',
    text: 'Em quanto tempo você espera ver os primeiros resultados?',
    options: ['Em 2-4 semanas', 'Em 1-2 meses', 'Em 3-6 meses', 'Estou focado no longo prazo', 'O mais rápido possível!'],
  },
] as const;
