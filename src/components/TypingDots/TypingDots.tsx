import { Box } from '@mantine/core'

export default function TypingDots() {
    return (
        <>
            <style>
                {`@keyframes phone-typing-dot-pulse {
                    0%, 80%, 100% {
                        opacity: 0.25;
                        transform: translateY(0);
                    }

                    40% {
                        opacity: 1;
                        transform: translateY(-2px);
                    }
                }`}
            </style>
            <Box component="span" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                {[0, 0.2, 0.4].map((delay) => (
                    <Box
                        key={delay}
                        component="span"
                        style={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            background: 'currentColor',
                            display: 'inline-block',
                            animation: 'phone-typing-dot-pulse 1.2s infinite ease-in-out',
                            animationDelay: `${delay}s`,
                        }}
                    />
                ))}
            </Box>
        </>
    )
}
