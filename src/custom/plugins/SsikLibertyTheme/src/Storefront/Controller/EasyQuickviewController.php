<?php declare(strict_types=1);

namespace SsikLibertyTheme\Storefront\Controller;

use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\Routing\Annotation\Route;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Shopware\Storefront\Page\Product\QuickView\MinimalQuickViewPageLoader;

/**
 * @RouteScope(scopes={"storefront"})
 */
class EasyQuickviewController extends StorefrontController
{
    /**
     * @var MinimalQuickViewPageLoader
     */
    private $minimalQuickViewPageLoader;

    public function __construct(
        MinimalQuickViewPageLoader $minimalQuickViewPageLoader
    ) {
        $this->minimalQuickViewPageLoader = $minimalQuickViewPageLoader;
    }

   /**
     * @Route("/easy-quickview/{productId}", name="widgets.easy.quickview", methods={"GET"}, defaults={"XmlHttpRequest": true})
     */
    public function easyQuickview(Request $request, SalesChannelContext $context): Response
    {
        $page = $this->minimalQuickViewPageLoader->load($request, $context);
        
        return $this->renderStorefront('@Storefront/storefront/ssik/easy-quickview.html.twig', ['page' => $page]);
    }
}