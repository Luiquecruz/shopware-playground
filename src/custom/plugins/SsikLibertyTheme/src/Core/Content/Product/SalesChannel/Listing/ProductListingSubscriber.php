<?php declare(strict_types=1);

namespace SsikLibertyTheme\Core\Content\Product\SalesChannel\Listing;

use Shopware\Core\Content\Product\Events\ProductListingCriteriaEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ProductListingSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            ProductListingCriteriaEvent::class => 'handleRequest'
        ];
    }

    public function handleRequest(ProductListingCriteriaEvent $event)
    {
        $criteria = $event->getCriteria();
        $criteria->addAssociation('manufacturer');
        $criteria->addAssociation('option.group');
        $criteria->addAssociation('media');
    }
}