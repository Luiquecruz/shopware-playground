<?php declare(strict_types=1);

namespace SsikLibertyTheme\Core\Content\Product\SalesChannel\CrossSelling;

use Shopware\Core\Content\Product\Events\ProductCrossSellingIdsCriteriaEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ProductCrossSellingSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            ProductCrossSellingIdsCriteriaEvent::class => 'handleRequest'
        ];
    }

    public function handleRequest(ProductCrossSellingIdsCriteriaEvent $event)
    {
    
        $criteria = $event->getCriteria();
        $criteria->addAssociation('manufacturer');
        $criteria->addAssociation('option.group');
        $criteria->addAssociation('media');

    }
}