import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TestableComponent } from "./testable.component";

describe("group", () => {

    let testableComponent: TestableComponent;
    let fixture: ComponentFixture<TestableComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestableComponent]
        });
        
        fixture = TestBed.createComponent(TestableComponent);
        testableComponent = fixture.componentInstance;
    });

    it("test1", () => {
        spyOn<any>(testableComponent, 'privateMethod').and.callFake(()=>{console.log("Fake spy running")});
        testableComponent.publicMethod();
        expect(2).toEqual(2);
    })
    it("test2", () => {
        expect(1).toEqual(1);
    })
})