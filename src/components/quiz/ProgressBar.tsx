import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
    current: number;
    total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
    const percent = total > 0 ? Math.round((current / total) * 100) : 0;

    return (
        <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm p-4 border-b">
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-muted-foreground">
                    Step {current} of {total}
                </p>
                <p className="text-sm font-bold text-primary">{percent}% completed</p>
            </div>
            <Progress value={percent} className="h-2" aria-label={`${percent}% completed`} />
        </div>
    );
}
