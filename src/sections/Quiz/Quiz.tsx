import { useState } from 'react';
import { Group, Text, Button, Progress, Paper, Container, Stack, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import FirstStepQuiz from '../../components/QuizSteps/FirstStepQuiz/FirstStepQuiz';
import SecondStepQuiz from '../../components/QuizSteps/SecondStepQuiz/SecondStepQuiz';
import ThirdStepQuiz from '../../components/QuizSteps/ThirdStepQuiz/ThirdStepQuiz';
import type { QuizValues } from './types';
import { QUIZ_STEPS_COUNT, useQuizForm } from './useQuizForm';
import { ORDER_ACCENT_GRADIENT } from '../../helpers/constants';

export function Quiz() {
    const [activeStep, setActiveStep] = useState(1);
    const { form, validateStep } = useQuizForm();

    const stepsCount = QUIZ_STEPS_COUNT;
    const progressValue = ((activeStep) / stepsCount) * 100;

    const nextStep = () => {
        if (!validateStep(activeStep)) {
            return;
        }

        setActiveStep((current) => (current < stepsCount ? current + 1 : current));
    };

    const prevStep = () => setActiveStep((current) => (current > 1 ? current - 1 : current));

    const handleSubmit = (values: QuizValues) => {
        console.log('Отправка на сервер:', values);
        form.reset();
        setActiveStep(1);
    };



    return (
        <Container id="quiz" size="xl" mt={{ base: 60, sm: 100, md: 150 }} component="section">

            <Stack align="center" gap={14}>
                <Title
                    fz="clamp(32px, 4.6vw, 48px)"
                    lh={1.04}
                    maw={820}
                    order={2}
                    ta="center"
                >
                    Анкета для рассчета стоимости бота
                </Title>
                <Text
                    ta="center"
                    c="dimmed"
                    maw={760}
                    fz="clamp(15px, 1.45vw, 28px)"
                    lh={1.4}
                >
                    Пройдите короткую анкету, и мы подготовим для вас коммерческое.
                </Text>
            </Stack>
            <Paper withBorder radius="xl" p={40} shadow="sm" maw={700} m={'0 auto'} mt={50}>

                <Group justify="space-between" mb="xs">
                    <Text size="sm" c="dimmed">Шаг {activeStep} из {stepsCount}</Text>
                    <Text size="sm" c="dimmed">{Math.round(progressValue)}%</Text>
                </Group>
                <Progress
                    value={progressValue}
                    mb={30}
                    size="md"
                    radius="xl"
                    styles={{
                        root: {
                            backgroundColor: 'var(--mantine-color-max-bg-2)',
                            overflow: 'hidden',
                        },
                        section: {
                            background:
                                'linear-gradient(90deg, var(--mantine-color-max-primary-6), var(--mantine-color-max-accent-6))',
                        },
                    }}
                />


                <form onSubmit={form.onSubmit(handleSubmit)}>

                    {activeStep === 1 && (<FirstStepQuiz form={form} />)}
                    {activeStep === 2 && (<SecondStepQuiz form={form} />)}
                    {activeStep === 3 && (<ThirdStepQuiz form={form} />)}


                    <Group justify="space-between" mt={40}>
                        <Button variant="light" color="max-primary" onClick={prevStep} disabled={activeStep === 1}>
                            Назад
                        </Button>

                        {activeStep === stepsCount ? (
                            <Button
                                type="submit"
                                variant="gradient"
                                gradient={ORDER_ACCENT_GRADIENT}
                                rightSection={<IconArrowRight size={18} />}
                            >
                                Отправить заявку
                            </Button>
                        ) : (
                            <Button
                                type="button"
                                onClick={nextStep}
                                variant="gradient"
                                gradient={ORDER_ACCENT_GRADIENT}
                                rightSection={<IconArrowRight size={18} />}
                            >
                                Далее
                            </Button>
                        )}
                    </Group>

                </form>
            </Paper>
        </Container>
    );
}