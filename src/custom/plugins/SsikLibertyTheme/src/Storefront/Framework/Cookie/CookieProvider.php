<?php declare(strict_types=1);

namespace SsikLibertyTheme\Storefront\Framework\Cookie;

use Shopware\Storefront\Framework\Cookie\CookieProviderInterface;

class CookieProvider implements CookieProviderInterface {

    private $originalService;

    function __construct(CookieProviderInterface $service)
    {
        $this->originalService = $service;
    }

    private const watchedCookie = [
        'snippet_name' => 'ssik.cookie.watched.name',
        'snippet_description' => 'ssik.cookie.watched.description',
        'cookie' => 'ssik_watched',
        'value'=> '',
        'expiration' => '30'
    ];    

    private const singleCookie = [
        'snippet_name' => 'ssik.cookie.listing.name',
        'snippet_description' => 'ssik.cookie.listing.description',
        'cookie' => 'ssik_listing_layout_type',
        'value'=> '',
        'expiration' => '30'
    ];

   
    public function getCookieGroups(): array
    {
        return array_merge(
            $this->originalService->getCookieGroups(),
            [
                self::singleCookie,
                self::watchedCookie
            ]
        );
    }
}