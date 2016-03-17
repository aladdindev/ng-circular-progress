describe('directive: circular-progress', function(){
	beforeEach(module('ng-circular-progress'));

	describe('with no attributes given', function(){
		var element, scope;

		beforeEach(inject(function($rootScope, $compile, circularProgressDefaults){
			scope = $rootScope.$new();

			circularProgressDefaults(scope);

			element = '<circular-progress></circular-progress>';

			element = $compile(element)(scope);
			scope.$digest();
		}));

		it('should use default attributes', function(){
			var isolatedScope = element.isolateScope();
			expect(isolatedScope.size).toBe('100');
			expect(isolatedScope.progress).toBe('1');
			expect(isolatedScope.strokeWidth).toBe('5');
			expect(isolatedScope.strokeColor).toBe("#c63d0f");
		});

		it('should contain a svg tag with default size', function(){
			expect(element.attr('height')).toBe('100px');
			expect(element.attr('width')).toBe('100px');
		});

		it('should contain a path tag with color and width', function(){
			expect(element.find('path').attr('stroke')).toBe('#c63d0f');
			expect(element.find('path').attr('stroke-width')).toBe('5px');
		});

		it('should contain a text tag with proper attributes', function(){
			expect(element.find('text').attr('x')).toBe('50');
			expect(element.find('text').attr('y')).toBe('50');
			expect(element.find('text').attr('font-size')).toBe('20px');
			expect(element.find('text').attr('fill')).toBe("#3b3738");
		});

	});

	describe('when changing the size value', function() {
		var element, scope;

		beforeEach(inject(function($rootScope, $compile, circularProgressDefaults){
			scope = $rootScope.$new();

			circularProgressDefaults(scope);

			element = '<circular-progress size="100"></circular-progress>';

			element = $compile(element)(scope);
			scope.$digest();
		}));

		it('should use new size value', function(){
			var isolatedScope = element.isolateScope();
			expect(isolatedScope.size).toBe('100');
			expect(isolatedScope.progress).toBe('1');
			expect(isolatedScope.strokeWidth).toBe('5');
			expect(isolatedScope.strokeColor).toBe("#c63d0f");
		});

		it('should contain a svg tag with default size', function(){
			expect(element.attr('height')).toBe('100px');
			expect(element.attr('width')).toBe('100px');
		});

		it('should contain a path tag with color and width', function(){
			expect(element.find('path').attr('stroke')).toBe('#c63d0f');
			expect(element.find('path').attr('stroke-width')).toBe('5px');
		});

		it('should contain a text tag with proper attributes', function(){
			expect(element.find('text').attr('x')).toBe('50');
			expect(element.find('text').attr('y')).toBe('50');
			expect(element.find('text').attr('font-size')).toBe('20px');
			expect(element.find('text').attr('fill')).toBe("#3b3738");
		});
	});
});