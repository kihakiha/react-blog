import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface IRatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = (props: IRatingCardProps) => {
  const {
    className = '',
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0,
  } = props

  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [starsCount, setStarsCount] = React.useState(rate);
  const [feedback, setFeedback] = React.useState('');

  const onSelectStars = React.useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept])

  const acceptHandler = React.useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount])

  const cancelHandler = React.useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount])

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t('Отзыв')} />
    </>
  );

  return (
    <Card className={className}>
      <VStack gap={8} align="center">
        <Text title={starsCount ? t('Спасибо за оценку!') : title} />
        <StarRating selectedStars={starsCount} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal center isOpen={isModalOpen} lazy>
          {modalContent}
          <HStack max gap={16} justify="around">
            <VStack max gap={32}>

              <Button
                theme={EButtonTheme.OUTLINE}
                onClick={cancelHandler}
              >
                {t('Закрыть')}
              </Button>
              <Button
                theme={EButtonTheme.BACKGROUND}
                onClick={acceptHandler}
              >
                {t('Отправить')}
              </Button>
            </VStack>
          </HStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap={32}>
            <Button
              theme={EButtonTheme.BACKGROUND}
              onClick={acceptHandler}
            >
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
};
