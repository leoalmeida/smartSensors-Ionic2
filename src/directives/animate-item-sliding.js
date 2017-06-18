var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer, Input } from '@angular/core';
var AnimateItemSliding = (function () {
    function AnimateItemSliding(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    AnimateItemSliding.prototype.ngOnInit = function () {
        var _this = this;
        if (this.shouldAnimate) {
            this.renderer.setElementClass(this.element.nativeElement, 'active-slide', true);
            this.renderer.setElementClass(this.element.nativeElement, 'active-options-right', true);
            // Wait to apply animation
            setTimeout(function () {
                _this.renderer.setElementClass(_this.element.nativeElement.firstElementChild, 'itemSlidingAnimation', true);
            }, 2000);
        }
    };
    return AnimateItemSliding;
}());
__decorate([
    Input('animateItemSliding'),
    __metadata("design:type", Boolean)
], AnimateItemSliding.prototype, "shouldAnimate", void 0);
AnimateItemSliding = __decorate([
    Directive({
        selector: '[animateItemSliding]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], AnimateItemSliding);
export { AnimateItemSliding };
//# sourceMappingURL=animate-item-sliding.js.map